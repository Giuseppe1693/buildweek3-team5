import { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchJobs = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
        setTotalPages(Math.ceil(data.length / 10));
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  useEffect(() => {
    fetchJobs("https://strive-benchmark.herokuapp.com/api/jobs");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchJobs(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`);
  };

  const getCurrentJobs = () => {
    const startIndex = (currentPage - 1) * 10;
    return jobs.slice(startIndex, startIndex + 10);
  };

  return (
    <>
      {jobs && (
        <div>
          <div className="d-flex justify-content-center">
            <Form onSubmit={handleSearch} className="my-5 d-flex gap-2">
              <Form.Control
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cerca un lavoro"
              />
              <Button type="submit">Cerca</Button>
            </Form>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
              Prev
            </Button>
            <span className="mx-2">
              {currentPage} di {totalPages}
            </span>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>

          {getCurrentJobs().map((job) => (
            <Container
              className="my-5 border p-3 shadow-sm mx-auto"
              style={{ backgroundColor: "#FFFFFF", maxWidth: "600px" }}
              key={job._id}
            >
              <Row>
                <Col xs={12} sm={12} md={8} className="my-2">
                  <h3 className="text-primary">{job.title}</h3>
                  <p className="mb-1">
                    <strong>Company:</strong> {job.company_name}
                  </p>
                  <p className="mb-1">
                    <strong>Category:</strong> {job.category}
                  </p>
                  <p className="mb-1">
                    <strong>Published on:</strong> {new Date(job.publication_date).toLocaleDateString()}
                  </p>
                  <p className="mb-1">
                    <strong>
                      <a href={job.url} target="_blank" style={{ textDecoration: "none" }}>
                        Vedi Annuncio
                      </a>
                    </strong>
                  </p>
                </Col>
              </Row>
            </Container>
          ))}

          <div className="d-flex justify-content-center mt-4">
            <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
              Prev
            </Button>
            <span className="mx-2">
              {currentPage} di {totalPages}
            </span>
            <Button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Jobs;
