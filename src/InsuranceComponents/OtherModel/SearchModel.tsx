import './OtherModel.css'
import ModelData from '../ModelData.tsx'
import { useNavigate } from 'react-router-dom';
import { FilterForm } from './OtherModel.ts';
import { ModelInfo } from '../ModelData.tsx';

function SearchModel({submitData}: { submitData: FilterForm | null }) {

  //用來切換頁面
  const navigate = useNavigate();
  //篩選完的模型資料
  const filterData = ModelResult(submitData)

  //若沒有符合的模型
  if (filterData.length === 0) {
    return <p>找不到符合條件的模型</p>
  }

  //輸出模型資料
  return (
    <>
      {filterData.map((item) => (
        <button 
          key={item.id} 
          className='app-button'
          onClick={() => navigate(`/model/${item.id}`)}
        > {/* 跳到 /model/item.id */}
            <h2>{item.model}</h2>
            <div className='app-button-sub'>
              <div>{item.company}</div>
              <div>模型準確率：{item.accuracy} %</div>
            </div>
        </button>
      ))}
    </>
  )
}
export default SearchModel

//篩選資料
function ModelResult(submitData: FilterForm | null) {

  // 取得模型資訊
  const dataList:ModelInfo[] = ModelData()

  //submitData沒資料
  if (!submitData)
  {
    return dataList
  }

  // 把model、company變小寫，accuracy轉成數字
  const accuracy = Number(submitData.accuracy) || 0;
  const model = submitData.model?.trim().toLowerCase() || '';
  const company = submitData.company?.trim().toLowerCase() || '';
  
  // 篩選符合的模型資料(用.filter過濾符合元素)
  // 兩個欄位都沒有填資料就只篩選accuracy
  if (model === '' && company === '') {
    return dataList.filter(item =>
      item.accuracy >= accuracy
    )
  }
  
  // 都有輸入 => model 和 company 都要包含才回傳
  if (model && company) {
    return dataList.filter(item =>
      item.model.toLowerCase().includes(model)
      && item.company.toLowerCase().includes(company)
      && item.accuracy >= accuracy
    )
  }

  // 僅model有值
  if (model && company === ''){
    return dataList.filter(item =>
      item.model.toLowerCase().includes(model)
      && item.accuracy >= accuracy
    )
  }

  // 僅company有值
  if (model === '' && company){
    return dataList.filter(item =>
      item.company.toLowerCase().includes(company)
      && item.accuracy >= accuracy
    )
  }

  //其他例外狀況
  return []
}