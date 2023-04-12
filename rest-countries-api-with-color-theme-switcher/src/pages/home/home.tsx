import { useState, useEffect } from "react";

//components
import Home from "../../components/home";

export default function HomePage() {
  const [filters, setFilters] = useState({ name: "", region: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filters = localStorage.getItem("filters");
    if (filters) {
      setFilters(JSON.parse(filters));
    }
    setLoading(false);
  }, []);

  return loading ? <></> : <Home filters={filters} />;
}
