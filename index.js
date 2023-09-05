
const { ConnectClient, GetMetricDataCommand } = require("@aws-sdk/client-connect")

const client = new ConnectClient({ apiVersion: '' });
const input = { // GetMetricDataRequest
  InstanceId: "STRING_VALUE", // required
  StartTime: new Date("TIMESTAMP"), // required
  EndTime: new Date("TIMESTAMP"), // required
  Filters: {
    Queues: [
      "STRING_VALUE",
    ],
    Channels: [
      "VOICE" || "CHAT" || "TASK",
    ],
    RoutingProfiles: [
      "STRING_VALUE",
    ],
  },
  Groupings: [
    "QUEUE" || "CHANNEL" || "ROUTING_PROFILE",
  ],
  HistoricalMetrics: [  // required
    {
      Name: "CONTACTS_QUEUED" || "CONTACTS_HANDLED" || "CONTACTS_ABANDONED" || "CONTACTS_CONSULTED" || "CONTACTS_AGENT_HUNG_UP_FIRST" || "CONTACTS_HANDLED_INCOMING" || "CONTACTS_HANDLED_OUTBOUND" || "CONTACTS_HOLD_ABANDONS" || "CONTACTS_TRANSFERRED_IN" || "CONTACTS_TRANSFERRED_OUT" || "CONTACTS_TRANSFERRED_IN_FROM_QUEUE" || "CONTACTS_TRANSFERRED_OUT_FROM_QUEUE" || "CONTACTS_MISSED" || "CALLBACK_CONTACTS_HANDLED" || "API_CONTACTS_HANDLED" || "OCCUPANCY" || "HANDLE_TIME" || "AFTER_CONTACT_WORK_TIME" || "QUEUED_TIME" || "ABANDON_TIME" || "QUEUE_ANSWER_TIME" || "HOLD_TIME" || "INTERACTION_TIME" || "INTERACTION_AND_HOLD_TIME" || "SERVICE_LEVEL",
      Threshold: { // Threshold
        Comparison: "LT",
        ThresholdValue: Number("double"),
      },
      Statistic: "SUM" || "MAX" || "AVG",
      Unit: "SECONDS" || "COUNT" || "PERCENT",
    },
  ],
  NextToken: "STRING_VALUE",
  MaxResults: Number("int"),
};

const command = new GetMetricDataCommand(input);
const response = await client.send(command);


module.exports = response;