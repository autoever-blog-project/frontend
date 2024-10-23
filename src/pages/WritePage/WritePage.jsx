import WritePageEditor from './WritePageEditor.jsx';
import WritePageRadio from './WritePageRadio.jsx';
import * as S from './WritePageStyle.js';
import WritePageTag from './WritePageTag.jsx';

function WritePage() {
  const handleSubmitTags = () => {};
  const handleSubmit = () => {};
  return (
    <div>
      <S.WritePageViewContainer>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <S.WritePageTextInput type="text" name="title" style={{ fontSize: 40 }} placeholder="제목을 입력하세요" />
          {/* 라디오 선택시 효과 및 선택값 보여주기 */}
          <WritePageRadio />
        </form>
        <WritePageTag onSubmitTags={handleSubmitTags} />
        <WritePageEditor />
        <div className="content"></div>
      </S.WritePageViewContainer>
    </div>
  );
}

export default WritePage;
