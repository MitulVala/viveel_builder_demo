import React, { Component } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import Grid from '@mui/material/Grid';


class PieChart extends Component {

    componentDidMount() {
        this.getChart();
    }
    getChart() {
        const { chartData, id } = this.props;
        let currentColor = localStorage.getItem('THEME_MODE') === 'dark' ? '#fff' : '#000';
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var chart = am4core.create(id, am4charts.PieChart);
        // Add data
        chart.data = chartData;

        // Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        let colorList = [];
        chartData?.map(() => colorList.push(am4core.color("#18446247")));

        pieSeries.colors.list = colorList;
        pieSeries.dataFields.value = "amount";
        pieSeries.dataFields.category = "name";
        pieSeries.slices.template.stroke = '#fff';
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;

        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;
        pieSeries.labels.template.fill = currentColor;
        pieSeries.slices.template.tooltipText = '{category}: {value}';
        chart.hiddenState.properties.radius = am4core.percent(0);
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
    componentWillUpdate() {
        this.getChart();
    }

    render() {
        const { id } = this.props;
        return (
            <Grid container alignItems="flex-start" direction="row" justify="center" >
                <Grid item xs={12} md={12}>
                    <div className='chat-content' id={id} />
                </Grid>
            </Grid>
        );
    }
}

export default PieChart;
