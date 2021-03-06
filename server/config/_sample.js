const defaults = {
  // 可选参数:
  // application 使用Oauth 2.0方式拉取数据
  // token 使用访问令牌方式方式拉取数据
  type: 'application',
  // 通过指定管理员进行数据拉取, 或者使用哪个用户名进行访问令牌生成
  // 管理员需要参与所有需要统计的团队及项目
  admin: 'willin'
};
exports.defaults = defaults;

// 用于 Coding 用户登录
// 创建应用: https://coding.net/user/account/setting/applications
// Coding 应用的 ID
exports.clientId = '613677f36f6961ef1ddc39714d51b7b2';
// Coding 应用的Secret
exports.clientSecret = new Buffer('NjljOTAxZTNjMWI2ZTM1YmMxNDU0MjhlNGExMGMzYmMxYTMwMWE0NQ==', 'base64').toString();

// 消息推送机器人
// 如果设置, 将每工作日推送当天未完成的任务
exports.notification = {
  type: false, // 目前只支持钉钉('dingbot'), 取消推送此处填 false (不带引号)
  url: 'https://oapi.dingtalk.com/robot/send?access_token=xxxxxx'
};

// 需要统计分析的团队列表, 及允许下列团队用户成员进行登录
exports.teams = [
  'airdwing'
];

// 如果系统类型未选择 使用访问令牌方式方式拉取数据, 可以留默认值不填
// 创建访问令牌: https://coding.net/user/account/setting/tokens
// 需要的权限: team, project (均为只读)
const token = '';
exports.auth = `Basic ${new Buffer(`${defaults.admin}:${token}`).toString('base64')}`;

// 服务器配置
exports.server = {
  port: 3933,
  hostname: '127.0.0.1'
};

// MySQL数据库配置
exports.mysql = {
  database: 'coding',
  host: '127.0.0.1',
  user: 'root',
  password: 'root'
};

// 配置存储
exports.storage = {
  type: 'memory' // 支持: memory (内存) / redis
};
// Redis 配置参考:
// exports.storage = {
//   type: 'redis',
//   redis: {
//     host: '127.0.0.1',
//     port: 6379,
//     db: 0,
//     ttl: 3600,
//     prefix: 'tasks:'
//   }
// };
