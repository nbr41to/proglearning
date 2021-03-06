import { useRouter } from 'next/router';
import { FC } from 'react';

import { LargeButton } from '../@atoms/LargeButton';
import { ToolTip } from '../@atoms/ToolTip';

type TopPageProps = {};

export const TopPage: FC<TopPageProps> = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-center gap-6">
        <LargeButton label="教材一覧" className="bg-primary2" />
        <LargeButton
          label="学習管理"
          className="bg-secondary2"
          onClick={() => router.push('/commit')}
        />
        <ToolTip tipContent="登録をすることでできるようになります">
          <LargeButton label="質問する" disabled />
        </ToolTip>
      </div>
      <div>メニューボタンを配置</div>
      <div>教材を見る</div>
      <div>勉強を始める</div>
      <div>目標を決める（ロードマップ）</div>
      <div>前回の続きから</div>
      <div>設定</div>
    </div>
  );
};
