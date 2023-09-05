import React, { PureComponent } from "react";
import { PieChart, Pie, Tooltip, Cell, PieProps } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default class Chart extends PureComponent<Readonly<PieProps>> {
  render() {
    const { data, dataKey } = this.props;

    return (
      <PieChart width={200} height={200}>
        <Pie dataKey={dataKey} data={data} innerRadius={40} outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  }
}
