interface HasBaseCssClass {
    baseCssClass?: string;
}
interface CoreComponentModel extends HasBaseCssClass {
    hidePlaceHolder?: boolean;
    id?: string;
    isInEditor: boolean;
}
interface RoutedModel {
    routed?: boolean;
}
export type { HasBaseCssClass, CoreComponentModel, RoutedModel };
