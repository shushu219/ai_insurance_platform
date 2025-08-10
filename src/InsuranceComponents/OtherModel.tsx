import './OtherModel/OtherModel.css'
import SearchModel from './OtherModel/SearchModel.tsx'
import { useState } from 'react'
import {FilterForm} from './OtherModel/OtherModel.ts'

function OtherModel(){

  //輸入框改變
  const [formData, setFormData] = useState<FilterForm>({ model: '', company: '' , accuracy: ''})
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  // submittedData 用來存按查詢時送出的資料，一開始是null
  const [submitData, setSubmitData] = useState<FilterForm|null>(null)
  const handleSubmit = () => {
    // 按查詢時，將目前輸入的資料存到 submittedData
    setSubmitData(formData)
  }

  return(
    <>
    {/* 標題 */}
    <div>
      <p className = 'title'>平台模型</p>
    </div>
    
    <br /> {/* 換行 */}

    {/* 查詢框 + 查詢按鈕 */}
    <div>
      <input 
        className='textbox'
        placeholder="模型名稱"
        name='model' 
        value={formData.model}
        onChange={handleChange}
      />
      <input 
        className='textbox'
        placeholder="AI公司名稱" 
        name='company'
        value={formData.company}
        onChange={handleChange}
      />
      <input 
        className='textbox accuracy-input'
        placeholder="模型準確率(%)" 
        name='accuracy'
        value={formData.accuracy}
        onChange={handleChange}
      />
      <button className='buttontype' onClick={handleSubmit}>查詢</button>
    </div>

    <br />

    {/* 查詢結果 */}
    <div className="modellist-box">
      {/* 一開始 submittedData 是null，表示沒有查詢過，顯示全部 */}
      {/* 如果有查詢資料，就傳給 App */}
      <SearchModel submitData={submitData} />
    </div>
    </>
  )
}
export default OtherModel
