// 定義一個 interface 代表單一模型的型別
export interface ModelInfo {
  id: number;
  model: string;
  company: string;
  application: string;
  releaseDate: string;
  accuracy: number;
  trainingSamples: string;
  validationReport: string;
  yTrue: number[];
  yScore: number[];
}

function ModelData():ModelInfo[] {
  // 目前有的模型
  // id: 模型編號
  // model: 模型名稱
  // company: AI公司
  // application: 使用場景
  // releaseDate: 上架時間
  // accuracy: 模型準確率
  // trainingSamples: 訓練樣本數
  // validationReport: 驗證報告
  // yTrue、yScore: ROC會用到的數值
  const dataList:ModelInfo[] = [
    {
      id: 12345,
      model: 'BERT 文本感情分類器',
      company: 'AI公司A',
      application: '電商評論情感分析',
      releaseDate: '2024-05-20',
      accuracy: 98.2,
      trainingSamples: '23000',
      validationReport: 'https://example.com/report.pdf',
      yTrue: [
        1,0,1,0,1,0,0,1,1,0,
        0,1,0,1,1,0,0,1,0,1,
        1,0,1,0,0,1,1,0,0,1,
        0,1,0,1,1,0,0,1,1,0,
        1,0,1,0,0,1,0,1,0,1
      ],
      yScore: [
        0.82,0.35,0.77,0.28,0.80,0.33,0.25,0.78,0.74,0.32,
        0.30,0.79,0.27,0.76,0.72,0.36,0.31,0.75,0.29,0.73,
        0.81,0.38,0.79,0.40,0.26,0.77,0.71,0.37,0.34,0.76,
        0.28,0.78,0.35,0.74,0.70,0.36,0.33,0.75,0.73,0.39,
        0.80,0.31,0.78,0.34,0.29,0.72,0.30,0.74,0.32,0.77
      ],
    },
{
  id: 23456,
  model: 'ResNet50 影像分類器',
  company: 'AI公司B',
  application: '醫療影像診斷',
  releaseDate: '2023-11-10',
  accuracy: 96.4,
  trainingSamples: '15000',
  validationReport: 'https://example.com/report2.pdf',
  yTrue: [
    0, 0, 1, 1, 0, 0, 1, 1, 0, 1,
    0, 1, 1, 0, 0, 1, 0, 1, 1, 0,
    0, 1, 1, 0, 1, 0, 0, 1, 1, 0,
    1, 0, 0, 1, 1, 0, 1, 0, 1, 0
  ],
  yScore: [
    0.15, 0.25, 0.72, 0.83, 0.22, 0.30, 0.76, 0.80, 0.18, 0.85,
    0.23, 0.78, 0.81, 0.21, 0.27, 0.79, 0.20, 0.75, 0.82, 0.25,
    0.19, 0.77, 0.80, 0.28, 0.83, 0.29, 0.15, 0.76, 0.78, 0.21,
    0.81, 0.20, 0.24, 0.79, 0.82, 0.22, 0.80, 0.18, 0.77, 0.25
  ],
},
    {
      id: 34567,
      model: 'LSTM 時序預測器',
      company: 'AI公司C',
      application: '股票價格預測',
      releaseDate: '2024-02-15',
      accuracy: 94.1,
      trainingSamples: '12000',
      validationReport: 'https://example.com/report3.pdf',
      yTrue: [
        0,1,1,0,1,0,1,0,0,1,
        1,0,0,1,1,0,0,1,0,1,
        1,0,1,0,0,1,0,1,1,0,
        1,0,0,1,1,0,1,0,0,1
      ],
      yScore: [
        0.28,0.76,0.80,0.30,0.82,0.31,0.78,0.32,0.29,0.79,
        0.81,0.33,0.30,0.82,0.80,0.28,0.27,0.79,0.31,0.83,
        0.80,0.34,0.82,0.29,0.27,0.78,0.30,0.81,0.82,0.28,
        0.84,0.31,0.26,0.80,0.81,0.29,0.83,0.32,0.27,0.78
      ],
    },
    {
      id: 45678,
      model: 'Transformer 語音辨識器',
      company: 'AI公司D',
      application: '即時語音轉文字',
      releaseDate: '2023-09-12',
      accuracy: 97.5,
      trainingSamples: '18000',
      validationReport: 'https://example.com/report4.pdf',
      yTrue: [
        1,0,1,0,0,1,1,0,1,0,
        0,1,0,1,1,0,1,0,0,1,
        1,0,0,1,0,1,1,0,1,0,
        0,1,1,0,1,0,0,1,1,0
      ],
      yScore: [
        0.82,0.33,0.81,0.30,0.27,0.80,0.84,0.35,0.82,0.28,
        0.29,0.83,0.26,0.82,0.80,0.32,0.81,0.29,0.31,0.84,
        0.82,0.34,0.33,0.81,0.28,0.83,0.84,0.30,0.82,0.27,
        0.29,0.80,0.82,0.35,0.83,0.30,0.31,0.81,0.80,0.28
      ],
    },
    {
      id: 56789,
      model: 'GAN 圖像生成器',
      company: 'AI公司E',
      application: '藝術圖像創作',
      releaseDate: '2024-01-05',
      accuracy: 95.7,
      trainingSamples: '9000',
      validationReport: 'https://example.com/report5.pdf',
      yTrue: [
        0,1,0,1,1,0,0,1,1,0,
        0,1,1,0,1,0,1,0,0,1,
        1,0,0,1,0,1,0,1,1,0,
        1,0,1,0,0,1,1,0,1,0
      ],
      yScore: [
        0.31,0.82,0.30,0.81,0.83,0.32,0.29,0.80,0.84,0.28,
        0.33,0.82,0.80,0.31,0.81,0.29,0.80,0.30,0.27,0.83,
        0.82,0.34,0.33,0.81,0.28,0.80,0.29,0.84,0.81,0.30,
        0.82,0.27,0.83,0.29,0.28,0.80,0.81,0.33,0.80,0.31
      ],
    },
    {
      id: 67890,
      model: 'YOLO 目標檢測器',
      company: 'AI公司F',
      application: '即時物體偵測',
      releaseDate: '2023-08-20',
      accuracy: 96.9,
      trainingSamples: '20000',
      validationReport: 'https://example.com/report6.pdf',
      yTrue: [
        1,0,0,1,0,1,1,0,1,0,
        0,1,1,0,1,0,0,1,0,1,
        1,0,1,0,0,1,1,0,1,0,
        0,1,1,0,0,1,0,1,1,0
      ],
      yScore: [
        0.82,0.33,0.31,0.80,0.29,0.81,0.83,0.30,0.82,0.27,
        0.29,0.84,0.81,0.32,0.80,0.33,0.31,0.83,0.28,0.82,
        0.81,0.30,0.84,0.27,0.29,0.80,0.83,0.33,0.82,0.31,
        0.30,0.81,0.80,0.28,0.84,0.29,0.33,0.82,0.81,0.30
      ],
    },
    {
      id: 78901,
      model: 'XGBoost 欺詐檢測器',
      company: 'AI公司G',
      application: '金融交易風險評估',
      releaseDate: '2024-03-10',
      accuracy: 97.8,
      trainingSamples: '14000',
      validationReport: 'https://example.com/report7.pdf',
      yTrue: [
        0,1,1,0,0,1,1,0,1,0,
        0,1,0,1,1,0,1,0,0,1,
        1,0,0,1,1,0,0,1,0,1,
        1,0,1,0,0,1,1,0,1,0
      ],
      yScore: [
        0.30,0.82,0.81,0.33,0.29,0.80,0.84,0.31,0.82,0.27,
        0.28,0.81,0.30,0.83,0.80,0.32,0.82,0.29,0.31,0.84,
        0.83,0.30,0.28,0.80,0.81,0.33,0.27,0.84,0.31,0.82,
        0.80,0.29,0.82,0.27,0.33,0.83,0.81,0.30,0.84,0.28
      ],
    },
  ];

  return dataList;
}

export default ModelData;

