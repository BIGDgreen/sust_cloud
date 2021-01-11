const PHONE_REP = /^1[3456789]\d{9}$/;

const JOB_ID_REP = /^[A-Z]\d{4}[A-Z]\d{2}$/;

export const FORM_RULES = {
  telephone: [
    {
      type: 'string',
      pattern: PHONE_REP,
      trigger: 'change',
      message: '手机号格式有误'
    }
  ],
  email: [
    {
      type: 'email',
      trigger: 'change',
      message: '邮箱格式有误'
    }
  ],
  jobId: [
    {
      type: 'string',
      pattern: JOB_ID_REP,
      trigger: 'change',
      message: '工号格式有误'
    }
  ],
  password: [
    {
      type: 'string',
      min: 9,
      trigger: 'change',
      message: '密码至少为9位'
    }
  ]
};

export const memberCols = [
  {
    prop: 'name',
    label: '姓名',
  },
  {
    prop: 'telephone',
    label: '电话',
  },
  {
    prop: 'email',
    label: '邮箱',
  },
  {
    prop: 'apartment',
    label: '部门',
  },
];

export const fileCols = [
  {
    prop: 'docName',
    label: '文件名称',
  },
  {
    prop: 'docPath',
    label: '路径',
  },
  {
    prop: 'docType',
    label: '类型',
    width: '90px'
  },
  {
    prop: 'uploadTime',
    label: '上传时间',
  },
  {
    prop: 'docSize',
    label: '文件大小',
    width: '80px'
  },
  {
    prop: 'docDescribe',
    label: '文件描述',
  },
];