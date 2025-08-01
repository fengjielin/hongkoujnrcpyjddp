$(function () {
  //   echarts_1();
  //   echarts_2();
  //   echarts_3();
  //   echarts_4();
  //   echarts_5();
  //   echarts_6();
  echarts_7();
  echarts_8();
  signUpNumChart();
  signUpEligibleNumChart();
  signUpEligibleRateChart();

  echarts_map();
  function echarts_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart1"));
    option = {
      title: {
        text: "14%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#0580f2",
          fontSize: "24",
        },
      },
      color: ["rgba(176, 212, 251, .1)"],
      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["75%", "85%"],
          itemStyle: {
            normal: {
              label: { show: false },
              labelLine: { show: false },
            },
          },

          hoverAnimation: false,
          data: [
            {
              value: 14,
              name: "01",
              itemStyle: {
                normal: {
                  color: {
                    // 完成的圆环的颜色
                    colorStops: [
                      {
                        offset: 0,
                        color: "#00cefc", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#367bec", // 100% 处的颜色
                      },
                    ],
                  },
                  label: { show: false },
                  labelLine: { show: false },
                },
              },
            },
            {
              name: "86",
              value: 20,
            },
          ],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart2"));
    option = {
      title: {
        text: "22%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#0580f2",
          fontSize: "24",
        },
      },
      color: ["rgba(176, 212, 251, .1)"],
      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["75%", "85%"],
          itemStyle: {
            normal: {
              label: { show: false },
              labelLine: { show: false },
            },
          },

          hoverAnimation: false,
          data: [
            {
              value: 22,
              name: "01",
              itemStyle: {
                normal: {
                  color: {
                    // 完成的圆环的颜色
                    colorStops: [
                      {
                        offset: 0,
                        color: "#00cefc", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#367bec", // 100% 处的颜色
                      },
                    ],
                  },
                  label: { show: false },
                  labelLine: { show: false },
                },
              },
            },
            {
              name: "78",
              value: 20,
            },
          ],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart3"));
    option = {
      title: {
        text: "10%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#0580f2",
          fontSize: "24",
        },
      },
      color: ["rgba(176, 212, 251, .1)"],
      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["75%", "85%"],
          itemStyle: {
            normal: {
              label: { show: false },
              labelLine: { show: false },
            },
          },

          hoverAnimation: false,
          data: [
            {
              value: 10,
              name: "01",
              itemStyle: {
                normal: {
                  color: {
                    // 完成的圆环的颜色
                    colorStops: [
                      {
                        offset: 0,
                        color: "#00cefc", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#367bec", // 100% 处的颜色
                      },
                    ],
                  },
                  label: { show: false },
                  labelLine: { show: false },
                },
              },
            },
            {
              name: "02",
              value: 90,
            },
          ],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart4"));
    option = {
      title: {
        text: "30%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#0580f2",
          fontSize: "24",
        },
      },
      color: ["rgba(176, 212, 251, .1)"],
      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["75%", "85%"],
          itemStyle: {
            normal: {
              label: { show: false },
              labelLine: { show: false },
            },
          },

          hoverAnimation: false,
          data: [
            {
              value: 30,
              name: "01",
              itemStyle: {
                normal: {
                  color: {
                    // 完成的圆环的颜色
                    colorStops: [
                      {
                        offset: 0,
                        color: "#00cefc", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#367bec", // 100% 处的颜色
                      },
                    ],
                  },
                  label: { show: false },
                  labelLine: { show: false },
                },
              },
            },
            {
              name: "02",
              value: 70,
            },
          ],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart5"));
    option = {
      title: {
        text: "12%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#0580f2",
          fontSize: "24",
        },
      },
      color: ["rgba(176, 212, 251, .1)"],
      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["75%", "85%"],
          itemStyle: {
            normal: {
              label: { show: false },
              labelLine: { show: false },
            },
          },

          hoverAnimation: false,
          data: [
            {
              value: 12,
              name: "01",
              itemStyle: {
                normal: {
                  color: {
                    // 完成的圆环的颜色
                    colorStops: [
                      {
                        offset: 0,
                        color: "#00cefc", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#367bec", // 100% 处的颜色
                      },
                    ],
                  },
                  label: { show: false },
                  labelLine: { show: false },
                },
              },
            },
            {
              name: "02",
              value: 88,
            },
          ],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart6"));
    option = {
      title: {
        text: "80%",
        x: "center",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#0580f2",
          fontSize: "24",
        },
      },
      color: ["rgba(176, 212, 251, .1)"],
      series: [
        {
          name: "Line 1",
          type: "pie",
          clockWise: true,
          radius: ["75%", "85%"],
          itemStyle: {
            normal: {
              label: { show: false },
              labelLine: { show: false },
            },
          },

          hoverAnimation: false,
          data: [
            {
              value: 80,
              name: "01",
              itemStyle: {
                normal: {
                  color: {
                    // 完成的圆环的颜色
                    colorStops: [
                      {
                        offset: 0,
                        color: "#00cefc", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#367bec", // 100% 处的颜色
                      },
                    ],
                  },
                  label: { show: false },
                  labelLine: { show: false },
                },
              },
            },
            {
              name: "02",
              value: 20,
            },
          ],
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_7() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart7"));
    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "5%",
        top: "15%",
        right: "5%",
        bottom: "10%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["养老护理", "婴幼儿发展引导员", "汽车维修工", "网络与信息安全管理员", "人工智能训练师"],
        axisLine: { lineStyle: { color: "#ccc" } },
        axisLabel: {
          color: "#fff",
          fontSize: 12,
          interval: 0,
          rich: {
            a: {
              lineHeight: 18, // 控制行高，越大间距越大
            },
          },
          formatter: function (value) {
            let str = "";
            if (value.length > 5) {
              str = value.replace(/(.{5})/g, "$1\n");
            } else {
              str = value;
            }
            return `{a|${str}}`;
          },
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#fff",
          fontSize: 12,
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          type: "bar",
          barWidth: "40%",
          data: [10405, 9874, 2345, 8645, 9873],
          itemStyle: {
            color: "#367bec",
            borderRadius: [4, 4, 0, 0],
          },
          label: {
            show: true,
            position: "top",
            color: "#fff",
            fontSize: 12,
            formatter: "{c}",
          },
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function echarts_8() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echart8"));

    option = {
      title: {
        text: "",
        left: "center",
        top: 10,
        textStyle: {
          color: "#fff",
          fontSize: 16,
          fontWeight: "normal",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "5%",
        top: "15%",
        right: "5%",
        bottom: "10%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["养老护理", "婴幼儿发展引导员", "汽车维修工", "网络与信息安全管理员", "人工智能训练师"],
        axisLine: { lineStyle: { color: "#ccc" } },
        axisLabel: {
          color: "#fff",
          fontSize: 12,
          interval: 0,
          rich: {
            a: {
              lineHeight: 18, // 控制行高，越大间距越大
            },
          },
          formatter: function (value) {
            let str = "";
            if (value.length > 5) {
              str = value.replace(/(.{5})/g, "$1\n");
            } else {
              str = value;
            }
            return `{a|${str}}`;
          },
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#fff",
          fontSize: 12,
        },
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          type: "bar",
          barWidth: "40%",
          data: [1234, 869, 678, 1087, 1146],
          itemStyle: {
            color: "#367bec",
            borderRadius: [4, 4, 0, 0],
          },
          label: {
            show: true,
            position: "top",
            color: "#fff",
            fontSize: 12,
            formatter: "{c}",
          },
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function signUpNumChart() {
    var myChart = echarts.init(document.getElementById("signUpNum"));
    var option = {
      title: {
        text: "",
        left: "center",
        top: "center",
        textStyle: {
          color: "#4ecb73",
          fontSize: 16,
          fontWeight: "bold",
        },
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}: {d}%",
      },
      legend: {
        orient: "vertical",
        right: "5%",
        top: "center",
        data: ["养老护理", "婴幼儿发展引导员", "汽车维修工", "网络与信息安全管理员", "人工智能训练师"],
        textStyle: {
          color: "#fff",
          fontSize: 12,
        },
      },
      color: ["#3fa7dc", "#4e73cb", "#ffb74d", "#ffd54f", "#4ecb73"],
      series: [
        {
          name: "报名人数占比",
          type: "pie",
          radius: ["50%", "65%"],
          center: ["35%", "50%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: false,
              fontSize: "16",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 5, name: "养老护理" },
            { value: 5, name: "婴幼儿发展引导员" },
            { value: 10, name: "汽车维修工" },
            { value: 20, name: "网络与信息安全管理员" },
            { value: 60, name: "人工智能训练师" },
          ],
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function signUpEligibleNumChart() {
    var myChart = echarts.init(document.getElementById("signUpEligibleNum"));
    var option = {
      title: {
        text: "",
        left: "center",
        top: 0,
        textStyle: {
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
        },
      },
      legend: {
        data: ["报名人数", "合格人数"],
        top: 0,
        right: 30,
        itemWidth: 16,
        itemHeight: 8,
        textStyle: {
          color: "#fff",
          fontSize: 14,
        },
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "10%",
        top: 50,
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["养老护理", "婴幼儿发展引导员", "汽车维修工", "网络与信息安全管理员", "人工智能训练师"],
        axisLine: { lineStyle: { color: "#ccc" } },
        axisLabel: {
          color: "#fff",
          fontSize: 12,
          interval: 0,
          rich: {
            a: {
              lineHeight: 18, // 控制行高，越大间距越大
            },
          },
          formatter: function (value) {
            let str = "";
            if (value.length > 5) {
              str = value.replace(/(.{5})/g, "$1\n");
            } else {
              str = value;
            }
            return `{a|${str}}`;
          },
        },
      },
      yAxis: {
        type: "value",
        axisLine: { show: false },
        splitLine: { show: false },
        axisLabel: { color: "#fff", fontSize: 12 },
      },
      series: [
        {
          name: "报名人数",
          type: "line",
          data: [234, 245, 215, 187, 197],
          symbol: "circle",
          symbolSize: 10,
          itemStyle: { color: "#2196f3" },
          lineStyle: { color: "#2196f3", width: 2 },
          label: { show: true, position: "top", color: "#fff", fontWeight: "bold" },
        },
        {
          name: "合格人数",
          type: "line",
          data: [138, 75, 86, 97, 110],
          symbol: "circle",
          symbolSize: 10,
          itemStyle: { color: "#e53935" },
          lineStyle: { color: "#e53935", width: 2 },
          label: { show: true, position: "bottom", color: "#fff", fontWeight: "bold" },
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }
  function signUpEligibleRateChart() {
    var myChart = echarts.init(document.getElementById("signUpEligibleRate"));
    var option = {
      title: {
        text: "合格率",
        left: "center",
        top: 0,
        textStyle: {
          color: "#fff",
          fontSize: 16,
          fontWeight: "bold",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "10%",
        top: 50,
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["养老护理", "婴幼儿发展引导员", "汽车维修工", "网络与信息安全管理员", "人工智能训练师"],
        axisLine: { lineStyle: { color: "#ccc" } },
        axisLabel: {
          color: "#fff",
          fontSize: 12,
          interval: 0,
          rich: {
            a: {
              lineHeight: 18, // 控制行高，越大间距越大
            },
          },
          formatter: function (value) {
            let str = "";
            if (value.length > 5) {
              str = value.replace(/(.{5})/g, "$1\n");
            } else {
              str = value;
            }
            return `{a|${str}}`;
          },
        },
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 100,
        axisLine: { show: false },
        splitLine: { show: false },
        axisLabel: {
          color: "#fff",
          fontSize: 12,
          formatter: "{value}%",
        },
      },
      series: [
        {
          name: "合格率",
          type: "bar",
          data: [80, 68, 30, 70, 76],
          barWidth: "30%",
          itemStyle: {
            color: "#1da1f2",
            borderRadius: [4, 4, 0, 0],
          },
          label: {
            show: true,
            position: "top",
            color: "#fff",
            fontWeight: "bold",
            formatter: "{c}%",
          },
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  }

  function echarts_map() {
    // 随机数据
    var data = [
      { name: "黄浦区", value: 156 },
      { name: "徐汇区", value: 234 },
      { name: "长宁区", value: 189 },
      { name: "静安区", value: 267 },
      { name: "普陀区", value: 198 },
      { name: "虹口区", value: 145 },
      { name: "杨浦区", value: 223 },
      { name: "闵行区", value: 345 },
      { name: "宝山区", value: 278 },
      { name: "嘉定区", value: 189 },
      { name: "浦东新区", value: 456 },
      { name: "金山区", value: 134 },
      { name: "松江区", value: 167 },
      { name: "青浦区", value: 145 },
      { name: "奉贤区", value: 123 },
      { name: "崇明区", value: 89 },
    ];
    option4 = {
      title: {
        text: "上海市各区域",
        style: {
          color: "#fff",
          fontSize: "18px",
          fontWeight: "bold",
        },
      },
      subtitle: {
        text: "",
        style: {
          color: "#8be9ff",
          fontSize: "12px",
        },
      },
      tooltip: {
        enabled: true,
        formatter: function () {
          return (
            "<b>" +
            this.point.name +
            '</b><br/>报名人数：<span style="color: #4ADEFE; font-weight: bold;">' +
            this.point.value +
            "人</span>"
          );
        },
        backgroundColor: "rgba(0,0,0,0.8)",
        borderColor: "#4a9eff",
        borderWidth: 1,
        style: {
          color: "#fff",
          fontSize: "12px",
        },
        shadow: true,
        useHTML: true,
      },
      chart: {
        backgroundColor: "transparent",
      },
      legend: {
        enabled: false,
      },
      colorAxis: {
        minColor: "#1da1f2",
        maxColor: "#367bec",
        labels: {
          style: {
            color: "#fff",
          },
        },
      },
      series: [
        {
          data: data,
          borderColor: "#4a9eff",
          borderWidth: 1,
          mapData: Highcharts.maps["cn/shanghai"],
          name: "培训数据",
          joinBy: ["name"], // 根据 name 属性进行关联
          states: {
            enabled: true,
            hover: {
              color: "#293fff",
              borderColor: "#1da1f2",
              borderWidth: 2,
            },
          },
          dataLabels: {
            enabled: true,
            color: "#fff",
            fontSize: "10px",
            fontWeight: "bold",
            format: "{point.name}",
          },
          cursor: "pointer",
          events: {
            click: function (e) {
              console.log("点击了：" + e.point.name + "，报名人数：" + e.point.value + "人");
              // 这里可以添加点击后的交互逻辑
            },
          },
        },
      ],
    };
    // 初始化图表
    var map = new Highcharts.Map("map", option4);
  }
});

// 日期范围选择器功能
class DateRangePicker {
  constructor() {
    this.currentDate = new Date();
    this.selectedStartDate = null;
    this.selectedEndDate = null;
    this.isSelectingStart = true;

    this.initElements();
    this.bindEvents();
    this.renderCalendar();
  }

  initElements() {
    this.input = document.getElementById("dateRangeInput");
    this.panel = document.getElementById("dateRangePanel");
    this.currentMonthEl = document.getElementById("currentMonth");
    this.daysContainer = document.getElementById("daysContainer");
    this.prevBtn = document.getElementById("prevMonth");
    this.nextBtn = document.getElementById("nextMonth");
    this.clearBtn = document.getElementById("clearBtn");
    this.confirmBtn = document.getElementById("confirmBtn");
  }

  bindEvents() {
    // 输入框点击事件
    this.input.addEventListener("click", () => {
      this.togglePanel();
    });

    // 月份切换
    this.prevBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // 阻止事件冒泡
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.renderCalendar();
    });

    this.nextBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // 阻止事件冒泡
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.renderCalendar();
    });

    // 清空和确认按钮
    this.clearBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // 阻止事件冒泡
      this.clearSelection();
    });

    this.confirmBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // 阻止事件冒泡
      this.confirmSelection();
    });

    // 点击外部关闭面板
    document.addEventListener("click", (e) => {
      if (!this.panel.contains(e.target) && !this.input.contains(e.target)) {
        this.hidePanel();
      }
    });

    // 为面板本身添加点击事件，阻止冒泡
    this.panel.addEventListener("click", (e) => {
      e.stopPropagation(); // 阻止面板内部点击事件冒泡
    });
  }

  togglePanel() {
    if (!this.isOpen) {
      this.showPanel();
    } else {
      this.hidePanel();
    }
  }

  showPanel() {
    this.isOpen = true;
    this.panel.style.display = "block";
    this.searchInput.focus();
    this.searchInput.select();
  }

  hidePanel() {
    this.isOpen = false;
    this.panel.style.display = "none";
    this.searchInput.value = "";
    this.showAllItems();
  }

  renderCalendar() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    // 更新月份显示
    this.currentMonthEl.textContent = `${year}年${month + 1}月`;

    // 清空日期容器
    this.daysContainer.innerHTML = "";

    // 获取当月第一天和最后一天
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    // 生成日期网格
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const dayEl = document.createElement("div");
      dayEl.className = "day";
      dayEl.textContent = date.getDate();

      // 判断日期类型
      if (date.getMonth() !== month) {
        dayEl.classList.add("other-month");
      } else if (this.isToday(date)) {
        dayEl.classList.add("today");
      }

      // 判断是否在选中范围内
      if (this.selectedStartDate && this.selectedEndDate) {
        if (this.isDateInRange(date, this.selectedStartDate, this.selectedEndDate)) {
          dayEl.classList.add("in-range");
        }
        if (this.isSameDate(date, this.selectedStartDate)) {
          dayEl.classList.add("range-start");
        }
        if (this.isSameDate(date, this.selectedEndDate)) {
          dayEl.classList.add("range-end");
        }
      } else if (this.selectedStartDate && this.isSameDate(date, this.selectedStartDate)) {
        dayEl.classList.add("selected");
      }

      // 点击事件
      dayEl.addEventListener("click", (e) => {
        e.stopPropagation(); // 阻止事件冒泡，避免触发外部点击关闭
        this.selectDate(date);
      });

      this.daysContainer.appendChild(dayEl);
    }
  }

  selectDate(date) {
    if (this.isSelectingStart) {
      // 选择开始日期
      this.selectedStartDate = new Date(date);
      this.selectedEndDate = null;
      this.isSelectingStart = false;

      // 更新输入框显示，提示用户选择结束日期
      this.updateInput();
      this.updateCalendarDisplay(); // 只更新显示，不重新渲染

      // 可以添加提示信息，告诉用户需要选择结束日期
      console.log("已选择开始日期，请选择结束日期");
    } else {
      // 选择结束日期
      if (date < this.selectedStartDate) {
        // 如果选择的日期早于开始日期，交换位置
        this.selectedEndDate = this.selectedStartDate;
        this.selectedStartDate = new Date(date);
      } else {
        this.selectedEndDate = new Date(date);
      }

      // 重置选择状态，允许用户重新选择
      this.isSelectingStart = true;

      // 更新输入框显示
      this.updateInput();
      this.updateCalendarDisplay(); // 只更新显示，不重新渲染

      // 提示用户选择完成，可以点击确定按钮
      console.log("日期范围选择完成，请点击确定按钮确认");
    }
  }

  // 新增方法：只更新日历显示，不重新渲染
  updateCalendarDisplay() {
    const days = this.daysContainer.querySelectorAll(".day");
    days.forEach((dayEl, index) => {
      // 移除所有选择相关的类
      dayEl.classList.remove("selected", "in-range", "range-start", "range-end");

      // 重新计算日期
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const firstDay = new Date(year, month, 1);
      const startDate = new Date(firstDay);
      startDate.setDate(startDate.getDate() - firstDay.getDay());

      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index);

      // 重新应用选择状态
      if (this.selectedStartDate && this.selectedEndDate) {
        if (this.isDateInRange(date, this.selectedStartDate, this.selectedEndDate)) {
          dayEl.classList.add("in-range");
        }
        if (this.isSameDate(date, this.selectedStartDate)) {
          dayEl.classList.add("range-start");
        }
        if (this.isSameDate(date, this.selectedEndDate)) {
          dayEl.classList.add("range-end");
        }
      } else if (this.selectedStartDate && this.isSameDate(date, this.selectedStartDate)) {
        dayEl.classList.add("selected");
      }
    });
  }

  clearSelection() {
    this.selectedStartDate = null;
    this.selectedEndDate = null;
    this.isSelectingStart = true;
    this.updateInput();
    this.updateCalendarDisplay(); // 只更新显示，不重新渲染

    // 重置边框颜色
    this.input.style.borderColor = "#4a9eff";

    console.log("已清空日期选择");
  }

  confirmSelection() {
    if (this.selectedStartDate && this.selectedEndDate) {
      // 验证日期范围是否有效
      if (this.selectedEndDate < this.selectedStartDate) {
        console.log("结束日期不能早于开始日期");
        return;
      }

      // 关闭面板
      this.hidePanel();

      // 这里可以添加回调函数，处理日期选择完成后的逻辑
      console.log("选择的日期范围:", this.selectedStartDate, "到", this.selectedEndDate);

      // 可以在这里触发数据更新或其他操作
      this.onDateRangeSelected();
    } else {
      // 提示用户需要选择完整的日期范围
      console.log("请选择完整的日期范围");
    }
  }

  // 新增方法：日期范围选择完成后的回调
  onDateRangeSelected() {
    // 这里可以添加选择完成后的逻辑
    // 例如：更新图表数据、发送请求等
    console.log("日期范围选择完成，开始更新数据...");
  }

  updateInput() {
    if (this.selectedStartDate && this.selectedEndDate) {
      // 完整的日期范围已选择
      const startStr = this.formatDate(this.selectedStartDate);
      const endStr = this.formatDate(this.selectedEndDate);
      this.input.value = `${startStr} 至 ${endStr}`;

      // 可以添加视觉提示，表示选择完成
      this.input.style.borderColor = "#4ecb73"; // 绿色边框表示完成
    } else if (this.selectedStartDate) {
      // 只选择了开始日期
      this.input.value = this.formatDate(this.selectedStartDate) + " (请选择结束日期)";

      // 可以添加视觉提示，表示需要继续选择
      this.input.style.borderColor = "#ffa726"; // 橙色边框表示进行中
    } else {
      // 没有选择任何日期
      this.input.value = "";
      this.input.style.borderColor = "#4a9eff"; // 恢复默认边框颜色
    }
  }

  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  isToday(date) {
    const today = new Date();
    return this.isSameDate(date, today);
  }

  isSameDate(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  isDateInRange(date, start, end) {
    return date >= start && date <= end;
  }
}

// 职称选择器功能
class TitleSelector {
  constructor() {
    this.selectedValue = "全部";
    this.isOpen = false;

    this.initElements();
    this.bindEvents();
    this.setDefaultValue();
  }

  initElements() {
    this.container = document.querySelector(".title-selector");
    this.input = document.getElementById("titleInput");
    this.dropdown = document.getElementById("titleDropdown");
    this.searchInput = document.getElementById("searchInput");
    this.titleList = document.getElementById("titleList");
    this.items = this.titleList.querySelectorAll(".dropdown-item");
  }

  bindEvents() {
    // 输入框点击事件
    this.input.addEventListener("click", () => {
      this.toggleDropdown();
    });

    // 搜索框事件
    this.searchInput.addEventListener("input", () => {
      this.filterItems();
    });

    // 搜索框点击事件（阻止冒泡）
    this.searchInput.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // 选项点击事件
    this.items.forEach((item) => {
      item.addEventListener("click", () => {
        this.selectItem(item);
      });
    });

    // 点击外部关闭下拉框
    document.addEventListener("click", (e) => {
      if (!this.container.contains(e.target)) {
        this.closeDropdown();
      }
    });

    // 键盘事件
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.toggleDropdown();
      }
    });

    this.searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeDropdown();
      }
    });
  }

  toggleDropdown() {
    if (this.isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  openDropdown() {
    this.isOpen = true;
    this.container.classList.add("active");
    this.dropdown.style.display = "block";
    this.searchInput.focus();
    this.searchInput.select();
  }

  closeDropdown() {
    this.isOpen = false;
    this.container.classList.remove("active");
    this.dropdown.style.display = "none";
    this.searchInput.value = "";
    this.showAllItems();
  }

  selectItem(item) {
    const value = item.getAttribute("data-value");
    this.selectedValue = value;
    this.input.value = value;

    // 更新选中状态
    this.items.forEach((i) => i.classList.remove("selected"));
    item.classList.add("selected");

    this.closeDropdown();

    // 触发选择事件
    this.onSelect(value);
  }

  filterItems() {
    const searchTerm = this.searchInput.value.toLowerCase();
    let hasVisibleItems = false;

    this.items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        item.classList.remove("hidden");
        hasVisibleItems = true;
      } else {
        item.classList.add("hidden");
      }
    });

    // 显示/隐藏空状态
    this.showEmptyState(!hasVisibleItems);
  }

  showAllItems() {
    this.items.forEach((item) => {
      item.classList.remove("hidden");
    });
    this.showEmptyState(false);
  }

  showEmptyState(show) {
    let emptyState = this.titleList.querySelector(".empty-state");

    if (show) {
      if (!emptyState) {
        emptyState = document.createElement("div");
        emptyState.className = "empty-state";
        emptyState.textContent = "未找到匹配的职称";
        this.titleList.appendChild(emptyState);
      }
      emptyState.style.display = "block";
    } else if (emptyState) {
      emptyState.style.display = "none";
    }
  }

  onSelect(value) {
    // 这里可以添加选择后的回调函数
    console.log("选择的职称:", value);

    // 示例：根据选择的职称更新图表数据
    this.updateChartsByTitle(value);
  }

  updateChartsByTitle(title) {
    // 根据选择的职称更新相关图表
    // 这里可以根据实际需求实现数据更新逻辑

    // 示例：更新报名排行
    this.updateRankingList(title);

    // 示例：更新图表数据
    this.updateChartData(title);
  }

  updateRankingList(title) {
    // 更新报名排行列表的示例逻辑
    const rankList = document.querySelector(".signup-rank-list");
    if (rankList) {
      // 这里可以根据选择的职称过滤或重新排序排行数据
      console.log("更新排行列表，职称:", title);
    }
  }

  updateChartData(title) {
    // 更新图表数据的示例逻辑
    console.log("更新图表数据，职称:", title);

    // 这里可以调用现有的图表更新函数
    // 例如：echarts_1(), echarts_7(), echarts_8() 等
  }

  // 获取当前选中的值
  getValue() {
    return this.selectedValue;
  }

  // 设置选中的值
  setValue(value) {
    this.selectedValue = value;
    this.input.value = value;

    // 更新选中状态
    this.items.forEach((item) => {
      if (item.getAttribute("data-value") === value) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  }

  // 设置默认值
  setDefaultValue() {
    this.setValue("全部");
  }

  // 清空选择
  clear() {
    this.selectedValue = null;
    this.input.value = "";
    this.items.forEach((item) => item.classList.remove("selected"));
  }
}

// 初始化日期选择器
$(function () {
  // 初始化日期范围选择器
  new DateRangePicker();

  // 初始化职称选择器
  new TitleSelector();
});
