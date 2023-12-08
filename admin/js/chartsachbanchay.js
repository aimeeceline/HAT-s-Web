const ctx2 = document.getElementById("chart-4").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: [
      "MC01", "KNS29", "NV86", "NV24", "NV63","KNS49","MC78","NV86","KNS35","MC96"
    ],
    datasets: [
      {
        label: "Số sách bán ra",
        data: [
          4980,4005,3956,3660,2911,2412,2004,1009,1000,996
        ],
        backgroundColor: [
            "rgba(255, 99, 132, 1)"
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});