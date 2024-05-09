import {
  CoreComponentModel,
  RoutedModel,
} from '@/components/ComponentProperties';

interface SeparatorProps extends CoreComponentModel, RoutedModel {}

const CoreSeparator = (props: SeparatorProps): React.JSX.Element => {
  return (
    <div className={props.baseCssClass ?? 'cmp-separator'} id={props.id}>
      <hr
        className={`${props.baseCssClass ?? 'cmp-separator'}__horizontal-rule`}
      />
    </div>
  );
};

export default CoreSeparator;
