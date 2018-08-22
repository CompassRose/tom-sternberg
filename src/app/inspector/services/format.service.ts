import * as d3 from 'd3';
import { timeFormat } from 'd3-time-format';

export class FormatService {
    // formats data according to rules specified in mappings.js
    formatData(d, v) {
        if (v.type === 'money') {
            return parseFloat(d.value[v.value]);
        } else if (v.type === 'string') {
            return this.titleCase(d.value[v.value]);
        } else if (v.type === 'leadingZero') {
            return this.addLeadingZero(d.value[v.value]);
        } else if (v.type === 'date') {
            if (v.format === 'year') {
                // console.log("Format year ");
                return this.formatDate(d.value[v.key], 'year');
            } else if (v.format === 'yearMonth') {
                return this.formatDate(d.value[v.key], 'month');
            } else {
                return this.formatDate(d.value[v.value], 'day');
            }
        } else {
            return d.value[v.value];
        }
    }

    // formats date (m/d/yyyy -> yyyy-mm-dd)
    private formatDate(d, timeframe) {
        if (d) {
            const aDate = new Date(d);
            let parseDate;

            if (timeframe === 'year') {
                parseDate = d3.timeFormat('%Y');
            } else if (timeframe === 'month') {
                parseDate = d3.timeFormat('%m-%Y');
            } else {
                parseDate = d3.timeFormat('%m-%d-%Y');
            }
            const date = parseDate(aDate);
            return date;
        } else {
            return '';
        }
    }

    // adds a leading 0 to a single digit number
    private addLeadingZero(num: string) {
        return parseInt(num) < 10 ? '0' + num : num;
    }

    // converts a string to Lower and then TitleCase.
    // Used for normalizing city names.

    private titleCase(s: string) {
        if (s) {
            return s.toLowerCase().replace(/^(.)|\s(.)/g, $1 => {
                return $1.toUpperCase();
            });
        }
        return '';
    }
}
