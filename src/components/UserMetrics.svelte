<script>
  import MetricTable from './MetricTable.svelte'

  const dummyBehaviourValues = {
    type: 'Behavior',
    metrics: [
      {
        name: 'Create daily plan',
        value: 4,
        delta: {
          value: 1,
          period: 'Today',
        },
      },
      {
        name: 'Cold calls',
        value: 3,
        delta: {
          value: 1,
          period: 'Today',
        },
      },
      {
        name: 'Mindset journal',
        value: 4,
        delta: {
          value: 0,
          period: 'Today',
        },
      },
    ],
  }

  const dummyMetricsValues = {
    type: 'Metrics',
    metrics: [
      {
        name: 'Leads generated',
        value: 14,
        delta: {
          value: 2,
          period: 'This week',
        },
      },
      {
        name: 'Sales made',
        value: 5,
        delta: {
          value: 3,
          period: 'This week',
        },
      },
      {
        name: 'Revenue',
        value: "$2000",
        delta: {
          value: "$500",
          period: 'This week',
        },
      },
    ],
  }
</script>

<div class="flex flex-col items-center justify-between w-full my-8 md:flex-row">
  <MetricTable {...dummyBehaviourValues} />
  <div class="hidden mx-4 md:block"></div>
  <MetricTable {...dummyMetricsValues} />
</div>
