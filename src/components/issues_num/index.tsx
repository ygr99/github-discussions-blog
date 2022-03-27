import React, { FC } from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';

import { fmtIssues } from '@utils/tools';
import useRgd from '@hooks/useRgd';

import './index.scss';

interface IssuesNumProps {
  number: number;
  len?: number;
  className?: string;
}

const IssuesNum: FC<IssuesNumProps> = (props) => {
  const rgdData = useRgd();
  const isIssue = rgdData.type === 'issues';
  let _link;
  if (isIssue) {
    _link = `https://github.com/${rgdData.issues_owner}/${rgdData.issues_repo}/issues/${props.number}`;
  } else {
    _link = `https://github.com/${rgdData.owner}/${rgdData.repo}/discussions/${props.number}`;
  }
  return (
    <Link
      className={clsx('number issues-num', props.className)}
      to={_link}
      target="_blank"
    >
      {props.len ? fmtIssues(props.number, props.len) : `#${props.number}`}
    </Link>
  );
};

export default IssuesNum;
