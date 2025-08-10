import './ModelDetail/ModelDetail.css'
import { useParams, useNavigate } from "react-router-dom";
import ModelData from'./ModelData.tsx'
import { ModelInfo } from './ModelData.tsx';
import PlotRoc from './ModelDetail/ComputeRocCurve.tsx'

function ModelDetail() {
  // 取得路由上的 id
  const { id } = useParams<{ id: string }>();
  //用 id 取得模型其他資訊(!代表一定會有值)
  const data: ModelInfo | undefined = ModelData().find(item =>item.id === Number(id))
  
  //找不到該模型資訊
  if (!data) {
    return (
      <div className='content-box'>
        <h2>找不到模型資訊</h2>
      </div>
    )
  }

  //用來切換頁面
  const navigate = useNavigate();

  // 根據 id 做資料抓取和顯示
  return (
    <>
    <div className='header'>
      <p className='title'>{data.model}</p>
      <p className='subtitle'>模型編號：{data.id}</p>
    </div>

    <br />

    <div className='content-box'>
      <p className='content-title'>基本資訊</p>
      <div className='content-row'>
        <div>AI公司：{data.company}</div>
        <div>主要應用場景：{data.application}</div>
        <div>模型上架時間：{data.releaseDate}</div>
        <div></div>
      </div>
    </div>

    <br />

    <div className='content-box'>
      <p className='content-title'>詳細資訊</p>
      <div className='content-row'>
        <div>模型準確率：{data.accuracy} %</div>
        <div>訓練樣本數：{data.trainingSamples}</div>
        <div>
          驗證報告：<a href={data.validationReport} target="_blank" rel="noopener noreferrer">查看報告</a>
        </div>
      </div>
    </div>

    <br />

    <div className='content-box'>
      <p className='content-title'>ROC曲線</p>
      <div className='content-row'>
        <div>
          <PlotRoc id = {Number(id)} />
        </div>
      </div>
    </div>

    <br />
    
    <button className='buttontype' onClick={() => navigate(`/`)}>返回模型列表</button>

    </>
  );
}
export default ModelDetail;
