export const ADDRESSES = {
  INBOX_MAIN: '0x4Dbd4fc535Ac27206064B68FfCf827b0A60BAB3f',
  INBOX_RINKEBY: '0x578BAde599406A8fE3d24Fd7f7211c0911F5B29e',
  OVM_L1_MESSENGER_KOVAN: '0x4361d0F75A0186C05f971c566dC6bEa5957483fD',
  OVM_L1_MESSENGER_MAIN: '0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1',
  OVM_L2_MESSENGER: '0x4200000000000000000000000000000000000007',
  // The deployment process includes testing the deployed governance bridge via calling the
  // 'updateEthereumGovernanceExecutor' method. As the initial value for EthereumGovExecutor
  // is used test instance of Aragon Agent on mainnet. It will be replaced with the official
  // Lido Aragon Agent before usage.
  ETHEREUM_GOV_EXECUTOR: '0x184d39300f2fa4419d04998e9c58cb5de586d879',
  OVM_GUARDIAN: '0x0000000000000000000000000000000000000000',
  ARB_GUARDIAN: '0x0000000000000000000000000000000000000000',
  RETRYABLE_TICKET_TX_ADDRESS: '0x000000000000000000000000000000000000006E',
};

export const CONSTANTS = {
  DELAY: 0,
  GRACE_PERIOD: 86400, // 24 hours
  MIN_DELAY: 0,
  // We can't use there max delay equal to 0 because BridgeExecutorBase
  // contract creation fails if minimumDelay >= maximumDelay
  MAX_DELAY: 1,
};
