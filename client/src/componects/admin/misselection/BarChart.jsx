import PropTypes from "prop-types";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  Tooltip,
} from "recharts";

const SimpleBarChart = ({ data }) => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  return (
    <BarChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 10,
        left: 10,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="nome" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" label={{ position: "top" }}>
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={colors[index % 20]}
            label={entry.nome}
          />
        ))}
      </Bar>
    </BarChart>
  );
};
SimpleBarChart.propTypes = {
  data: PropTypes.array,
};

export default SimpleBarChart;
