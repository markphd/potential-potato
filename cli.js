const { result } = require("./data/domain-overview.json");
const { domains } = result;

function getEntriesWithPlan(plan) {
  const SUBSCRIPTION = [
    "MIRROR",
    "PPS_LARGE",
    "PPS_LARGE",
    "PPS_XLARGE",
    "PPS_LARGE",
    "PPS_SMALL",
    "PPS_SMALL",
    "PPS_SMALL",
    "PPS_XXLARGE",
    "PPS_MEDIUM",
  ];

  if (SUBSCRIPTION.includes(plan)) {
    let match = domains.filter((domain) => domain.plan === plan);
    console.log(match);
    return match;
  } else {
    console.log(`No entry found for plan named ${plan}`);
  }
}

// TEST FUNCTION
// getEntriesWithPlan("MIRROR");
// getEntriesWithPlan("PPS_SMALL");
// getEntriesWithPlan(null);
// getEntriesWithPlan("AAAAAAAAA");
// getEntriesWithPlan("PPS");

function getEntriesWithNonZeroBalance() {
  let matches = domains.filter(({ balance }) => balance.amount !== 0);
  console.log(matches);
}

//TEST FUNCTION
// getEntriesWithNonZeroBalance();

function getConnectedDomains() {
  let parentDomains = domains.filter((domain) => domain.parentDomain === null);
  let childDomains = domains.filter((domain) => domain.parentDomain !== null);
  let domainTree = {};

  parentDomains.forEach(
    (parent) => (domainTree[parent.name] = { connectedDomains: [] })
  );

  childDomains.forEach((child) =>
    domainTree[child.parentDomain].connectedDomains.push(child.name)
  );

  console.log(JSON.stringify(domainTree, null, 4));
}

//TEST FUNCTION
// getConnectedDomains();
