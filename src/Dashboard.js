import React, { useState, useEffect } from "react";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import Chart from "chart.js";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [weather, setWeather] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the Total User and Total Students data from API or database
        const data = await fetch("https://stackoverflow.com");
        const jsonData = await data.json();
        setTotalUsers(jsonData.totalUsers);
        setTotalStudents(jsonData.totalStudents);

        // Fetch the Weather data from API
        const weatherData = await fetch("<API endpoint for weather>");
        const weatherJsonData = await weatherData.json();
        setWeather(weatherJsonData.weather);

        // Initialize the Chart Views for Visitors
        const chart = new Chart("chart", {
          type: "bar",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Visitors",
                data: jsonData.visitorsData,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1
              }
            ]
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }
        });

        setChartData(chart);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Total User</Card.Title>
              <Card.Text>{totalUsers}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Total Students</Card.Title>
              <Card.Text>{totalStudents}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* <Col md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Weather</Card.Title>
              <Card.Text>{weather}</Card.Text>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Visitors Chart</Card.Title>
              <Card.Text>
                {isLoading ? (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                ) : (
                  <canvas id="chart" width="400" height="150"></canvas>
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
