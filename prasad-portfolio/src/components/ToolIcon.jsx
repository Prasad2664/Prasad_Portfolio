import {
  LuDatabase, LuFileSpreadsheet, LuChartColumn, LuChartArea,
  LuSparkles, LuScanSearch, LuChartPie, LuWaves,
} from 'react-icons/lu';
import { SiPython, SiPandas, SiNumpy } from 'react-icons/si';

const TOOL_ICONS = {
  SQL: { Icon: LuDatabase, color: '#2563eb' },
  Python: { Icon: SiPython, color: '#3776AB' },
  'Power BI': { Icon: LuChartColumn, color: '#F2C811' },
  Excel: { Icon: LuFileSpreadsheet, color: '#217346' },
  Tableau: { Icon: LuChartArea, color: '#E97627' },
  Pandas: { Icon: SiPandas, color: '#150458' },
  NumPy: { Icon: SiNumpy, color: '#4D77CF' },
  Matplotlib: { Icon: LuChartArea, color: '#11557C' },
  Seaborn : {Icon: LuChartArea, color: '#11557C'},
  'Data Cleaning': { Icon: LuSparkles, color: '#0EA5E9' },
  EDA: { Icon: LuScanSearch, color: '#7C3AED' },
  'Data Visualization': { Icon: LuChartPie, color: '#DB2777' },
};

export default function ToolIcon({ name, size = 24 }) {
  const entry = TOOL_ICONS[name] || { Icon: LuDatabase, color: '#2350eb' };
  const { Icon, color } = entry;
  return <Icon size={size} style={{ color }} />;
}