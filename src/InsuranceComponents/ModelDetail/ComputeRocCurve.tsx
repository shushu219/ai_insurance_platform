import React from 'react';
import { Line } from 'react-chartjs-2';
import ModelData from '../ModelData';

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface RocPoint {
  FPR: number;
  TPR: number;
}

function ComputeRocCurve(yTrue: number[], yScores: number[]): RocPoint[] {
  const thresholds = Array.from(new Set(yScores)).sort((a, b) => b - a);

  const P = yTrue.filter(y => y === 1).length;
  const N = yTrue.length - P;

  const rocPoints: RocPoint[] = [];
  // 起點
  rocPoints.push({ FPR: 0, TPR: 0 });

  thresholds.forEach(thresh => {
    let TP = 0, FP = 0;
    yScores.forEach((score, idx) => {
      if (score >= thresh) {
        if (yTrue[idx] === 1) TP++;
        else FP++;
      }
    });
    const TPR = P === 0 ? 0 : TP / P;
    const FPR = N === 0 ? 0 : FP / N;
    rocPoints.push({ FPR, TPR });
  });

  // 終點
  rocPoints.push({ FPR: 1, TPR: 1 });

  return rocPoints;
}

interface PlotRocProps {
  id: number;
}

export default function PlotRoc({ id }: PlotRocProps) {
  const model = ModelData().find(item => item.id === id);

  if (!model) {
    return <p>找不到模型資料 (id: {id})</p>;
  }

  const { yTrue, yScore } = model;
  if (!yTrue || !yScore) {
    return <p>此模型無 ROC 資料</p>;
  }

  const rocPoints = ComputeRocCurve(yTrue, yScore);

  const fprValues = rocPoints.map(p => p.FPR);
  const tprValues = rocPoints.map(p => p.TPR);

  const minX = Math.max(0, Math.min(...fprValues) - 0.05);
  const maxX = Math.min(1, Math.max(...fprValues) + 0.05);
  const minY = Math.max(0, Math.min(...tprValues) - 0.05);
  const maxY = Math.min(1, Math.max(...tprValues) + 0.05);

  const data = {
    datasets: [
      {
        label: 'ROC 曲線',
        data: rocPoints.map(p => ({ x: p.FPR, y: p.TPR })),
        fill: false,
        borderColor: 'blue',
        tension: 0.3,
      },
      {
        label: '隨機猜測',
        data: rocPoints.map(p => ({ x: p.FPR, y: p.FPR })),
        borderColor: 'gray',
        borderDash: [5, 5],
        fill: false,
        pointRadius: 0,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    scales: {
      x: {
        type: 'linear',
        title: { display: true, text: 'False Positive Rate (FPR)' },
        min: minX,
        max: maxX,
        ticks: {
          stepSize: 0.05,
          callback: (v) => (typeof v === 'number' ? v.toFixed(2) : v),
        },
      },
      y: {
        type: 'linear',
        title: { display: true, text: 'True Positive Rate (TPR)' },
        min: minY,
        max: maxY,
        ticks: {
          stepSize: 0.05,
          callback: (v) => (typeof v === 'number' ? v.toFixed(2) : v),
        },
      },
    },
    plugins: {
      legend: { display: true, position: 'bottom' },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '100%', height: '350px' }}>
      <Line data={data} options={options} />
    </div>
  );
}
