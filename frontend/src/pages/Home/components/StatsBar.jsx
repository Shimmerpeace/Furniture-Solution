import statsBg from "../../../assets/image1.jpeg";

function StatsBar() {
const stats = [
{ id: 1, label: "Items Sold", value: "74,353" },
{ id: 2, label: "Happy Customers", value: "6,333" },
{ id: 3, label: "Years Experience", value: "20+" },
{ id: 4, label: "Partners", value: "20+" },
];

return (
<section className="stats-bar" role="region" aria-label="Company statistics" >
<img src={statsBg} alt="" className="stats-bg" aria-hidden="true" loading="lazy" />
<div className="stats-grid">
{stats.map((stat) => (
<div key={stat.id} className="stat">
<strong>{stat.value}</strong>
<span>{stat.label}</span>
</div>
))}
</div>
</section>
);
}

export default StatsBar;