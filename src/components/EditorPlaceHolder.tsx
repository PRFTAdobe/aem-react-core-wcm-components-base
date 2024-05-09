import classNames from 'classnames';

export interface PlaceHolderModel {
  componentTitle?: string;
  classAppend?: string;
  emptyTextAppend?: string;
}

const DEFAULT_EMPTY_TEXT_LABEL = 'Please configure the component';

const EditorPlaceHolder = ({
  componentTitle,
  emptyTextAppend,
  classAppend,
}: PlaceHolderModel) => {
  const part1: string =
    componentTitle && componentTitle.length > 0 ? `${componentTitle} - ` : '';
  const part2: string = emptyTextAppend ?? DEFAULT_EMPTY_TEXT_LABEL;
  const emptyText = part1 + part2;

  return (
    <div
      className={classNames(`cq-placeholder`, {
        [classAppend!]: classAppend !== null,
      })}
    >
      {emptyText}
    </div>
  );
};

export default EditorPlaceHolder;
