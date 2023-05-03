declare module 'react-native-ios-modal' {
  type ModalViewProps = {
    onModalDismiss(): void;
    containerStyle: ViewStyle;
    children: React.ReactNode;
  };

  class ModalView extends React.PureComponent<ModalViewProps, any> {
    setVisibility(visibility: boolean): void;
  }
}
