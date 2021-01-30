---
layout: report
title: "'20-21 Intern Application Cycle Stats"
author: Matthew Wang
date: 2021-01-26 10:21:42 UTC
blurb: "A quick summary of statistics surrounding our '20-21 intern application cycle."
---

It's the end of Week 4 in Winter Quarter, and our interns are working hard away at their projects! We also want to make transparent the statistics that [ACM at UCLA](https://uclaacm.com) gathered about our intern application process, and how they compare to our specific committee specifics.

## Statistics: Teach LA

This year Teach LA had **71 total applications** for our interns. While we did not ask for gender identity, we did ask for pronouns; here is the breakdown:

* 50.70% have pronouns he/him/his
* 43.66% have pronouns she/her/hers
* 1.41% have pronouns they/them/theirs
* 4.23% prefer not to disclose

<div id="tla-pronoun-split"></div>

Our of our 71 total applicants, we had just one transfer (1.41%). This is an area of improvement that we are actively investigating.

Split up by graduation year, our applicants were:

* 2.82% are graduating in 2021
* 9.86% are graduating in 2022
* 33.80% are graduating in 2023
* 53.52% are graduating in 2024

<div id="tla-year-split"></div>

## Statistics: ACM at UCLA

We can compare this to statistics for ACM's entire internship program. There were **255 total unique applications** for intern positions (one application can include other committees).

Breaking down the three collected statistics:

* 60.39% have pronouns he/him/his
* 34.12% have pronouns she/her/hers
* 1.57% have pronouns they/them/theirs
* 3.92% prefer not to disclose

<div id="acm-pronoun-split"></div>

7.06% of our applicants were transfer students.

Split up by graduation year,

* 3.92% are graduating in 2021
* 18.43% are graduating in 2022
* 35.29% are graduating in 2023
* 41.96% are graduating in 2024

<div id="acm-year-split"></div>

## Remarks and Closing Thoughts

We took these statistics into account to identify weak points in our recruiting and application pipeline. In particular, we had very little transfer student engagement. Using this into account, we've started to increase communication with UCLA's Transfer Center, and are looking into more ways to actively support and include the transfer student community.

Both Teach LA and ACM as a whole have more equitable gender splits than the UCLA Computer Science program as a whole, which tends to average 20-25% female over the past five years (see the [UCEE reports](https://www.seasoasa.ucla.edu/enrollment-degree-statistics-new/) for more information).

Our committee skews harder towards first and second-years than the rest of ACM, and the student body in general. Generally, intern positions tend to skew for first and second-years, so this overall pattern is expected.

We are committed to making our internship application process -  and more broadly, our club - as transparent and inclusive as possible. We plan to continue to survey aggregate statistics surrounding our organization, and use these to identify weaknesses in our organizational structure and plan.

If you have any questions, concerns, or would like to discuss this data, please feel free to reach out! Our organization is generally available via email at [acmteachla@gmail.com](mailto:acmteachla@gmail.com), and our individual officers can be contacted via the [team page]({{site.baseurl}}/team).

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script>
// the -60 exists for gutter spacing
let responsiveWidth = Math.min(window.innerWidth - 60, 500);
let layout = {
  height: responsiveWidth * 4/5,
  width: responsiveWidth,
};
let tla_pronouns_layout = {...layout};
tla_pronouns_layout["title"] = {
  text: 'Teach LA Applicants by Pronouns'
}
let tla_pronouns_data = [{
  values: [50.70, 43.66, 1.41, 4.23],
  labels: ['he/him/his', 'she/her/hers', 'they/them/theirs', 'prefer not to disclose'],
  type: 'pie'
}];
let tla_years_layout = {...layout};
tla_years_layout["title"] = {
  text: 'Teach LA Applicants by Graduation Year'
}
let tla_years_data = [{
  values: [2.82, 9.86, 33.80, 53.52],
  labels: [2021, 2022, 2023, 2024],
  type: 'pie'
}];
let acm_pronouns_layout = {...layout};
acm_pronouns_layout["title"] = {
  text: 'ACM Applicants by Pronouns'
}
let acm_pronouns_data = [{
  values: [60.39, 34.12, 1.57, 3.92],
  labels: ['he/him/his', 'she/her/hers', 'they/them/theirs', 'prefer not to disclose'],
  type: 'pie'
}];
let acm_years_layout = {...layout};
acm_years_layout["title"] = {
  text: 'ACM Applicants by Graduation Year'
}
let acm_years_data = [{
  values: [3.92, 18.43, 35.29, 3.92],
  labels: [2021, 2022, 2023, 2024],
  type: 'pie'
}];
Plotly.newPlot('tla-pronoun-split', tla_pronouns_data, tla_pronouns_layout);
Plotly.newPlot('tla-year-split', tla_years_data, tla_years_layout);
Plotly.newPlot('acm-pronoun-split', acm_pronouns_data, acm_pronouns_layout);
Plotly.newPlot('acm-year-split', acm_years_data, acm_years_layout);
</script>
