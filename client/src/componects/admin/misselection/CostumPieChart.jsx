import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import PropType from "prop-types";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CostumPieChart = ({ data }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="40%"
        cy="40%"
        labelLine={true}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            name={entry._id}
          />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
};
CostumPieChart.propTypes = {
  data: PropType.array,
};
export default CostumPieChart;
