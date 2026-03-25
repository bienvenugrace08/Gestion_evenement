import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";

type GraphiqueProps = {
  type: "bar" | "pie" | "line";
  data: any[];
  titre: string;
};

function Graphique({ type, data, titre }: GraphiqueProps) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-lg font-semibold text-[#1E3A81] mb-4">{titre}</h3>
      <ResponsiveContainer width="100%" height={300}>
        {type === "bar" && (
          <BarChart data={data}>
            <XAxis dataKey="mois" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="valeur" fill="#1E3A81" />
          </BarChart>
        )}

        {type === "line" && (
          <LineChart data={data}>
            <XAxis dataKey="mois" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="valeur" stroke="#F97316" />
          </LineChart>
        )}

        {type === "pie" && (
          <PieChart>
            <Pie
              data={data}
              dataKey="valeur"
              nameKey="categorie"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={["#1E3A81", "#F97316", "#22C55E"][index % 3]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
export default Graphique
