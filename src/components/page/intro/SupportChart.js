// src/components/page/intro/SupportChart.js

import React from 'react';
import styled from 'styled-components';

import PageBaseContainer from 'redux/containers/PageBaseContainer';
import IntroSection from './IntroSection';
import IntroTab from './IntroTab';

const initialChartLayout = {
    lg: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'RechartsBarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'RechartsStackedBarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'RechartsComposedChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'RechartsAreaChart', x: 8, y: 6, w: 4, h: 6 },
    ],
    md: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'RechartsBarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'RechartsStackedBarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'RechartsComposedChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'RechartsAreaChart', x: 8, y: 6, w: 4, h: 6 },
    ],
    sm: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'RechartsBarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'RechartsStackedBarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'RechartsComposedChart', x: 4, y: 12, w: 4, h: 6 },
        { i: 'RechartsAreaChart', x: 0, y: 12, w: 4, h: 6 },
    ],
    xs: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 6, h: 6 },
        { i: 'RechartsMultiLineChart', x: 0, y: 6, w: 6, h: 7 },
        { i: 'RechartsBarChart', x: 0, y: 19, w: 6, h: 6 },
        { i: 'RechartsStackedBarChart', x: 0, y: 25, w: 6, h: 6 },
        { i: 'RechartsComposedChart', x: 0, y: 13, w: 6, h: 6 },
        { i: 'RechartsAreaChart', x: 0, y: 31, w: 6, h: 6 },
    ],
    xxs: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'RechartsBarChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'RechartsStackedBarChart', x: 0, y: 24, w: 4, h: 6 },
        { i: 'RechartsComposedChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'RechartsAreaChart', x: 0, y: 30, w: 4, h: 6 },
    ],
};

const initialChartBlocks = [
    { i: 'RechartsLineChart' },
    { i: 'RechartsMultiLineChart' },
    { i: 'RechartsBarChart' },
    { i: 'RechartsStackedBarChart' },
    { i: 'RechartsComposedChart' },
    { i: 'RechartsAreaChart' },
];

const initialHighLayout = {
    lg: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 8, y: 6, w: 4, h: 6 },
    ],
    md: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 8, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 4, y: 6, w: 4, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 8, y: 6, w: 4, h: 6 },
    ],
    sm: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 4, y: 0, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'HighchartsBoxPlot', x: 4, y: 6, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 4, y: 12, w: 4, h: 6 },
    ],
    xs: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 6, h: 6 },
        { i: 'HighchartsBarChart', x: 0, y: 6, w: 6, h: 6 },
        { i: 'HighchartsPieChart', x: 0, y: 12, w: 6, h: 6 },
        { i: 'HighchartsPolarChart', x: 0, y: 18, w: 6, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 24, w: 6, h: 6 },
        { i: 'HighchartsAreaChart', x: 0, y: 30, w: 6, h: 6 },
    ],
    xxs: [
        { i: 'HighchartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'HighchartsBarChart', x: 0, y: 6, w: 4, h: 6 },
        { i: 'HighchartsPieChart', x: 0, y: 12, w: 4, h: 6 },
        { i: 'HighchartsPolarChart', x: 0, y: 18, w: 4, h: 6 },
        { i: 'HighchartsBoxPlot', x: 0, y: 24, w: 4, h: 6 },
        { i: 'HighchartsAreaChart', x: 0, y: 30, w: 4, h: 6 },
    ],
};

const initialHighBlocks = [
    { i: 'HighchartsLineChart' },
    { i: 'HighchartsBarChart' },
    { i: 'HighchartsPieChart' },
    { i: 'HighchartsPolarChart' },
    { i: 'HighchartsAreaChart' },
    { i: 'HighchartsBoxPlot' },
];

const PageBaseWrapper = styled.div`
    min-height: 832px;
`;

function SupportChart(props) {
    return (
        <IntroSection title={'Supports various chart'}>
            <small>
                For more charts, please see the Recharts and Highcharts menu of
                components.
            </small>
            <IntroTab labels={['Recharts', 'HighCharts']}>
                <PageBaseWrapper>
                    <PageBaseContainer
                        readonly
                        initialLayout={initialChartLayout}
                        initialBlocks={initialChartBlocks}
                    />
                </PageBaseWrapper>
                <PageBaseWrapper>
                    <PageBaseContainer
                        readonly
                        initialLayout={initialHighLayout}
                        initialBlocks={initialHighBlocks}
                    />
                </PageBaseWrapper>
            </IntroTab>
        </IntroSection>
    );
}

export default SupportChart;
