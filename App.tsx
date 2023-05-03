import React, {useRef, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import type {StatusBarStyle} from 'react-native';

import {ModalView} from 'react-native-ios-modal';
import Settings from './src/Settings';

function App(): JSX.Element {
  const [barStyle, setBarStyle] = useState<StatusBarStyle>('dark-content');
  const modalRef = useRef<ModalView>(null);

  return (
    <View style={styles.centeredView}>
      <StatusBar barStyle={barStyle} />
      <ModalView
        ref={modalRef}
        containerStyle={styles.modalView}
        onModalDismiss={() => {
          setBarStyle('dark-content');
        }}>
        {/* Copied from WithFrame */}
        <Settings />
      </ModalView>
      <TouchableOpacity
        onPress={() => {
          if (modalRef.current) {
            modalRef.current.setVisibility(true);
            setBarStyle('light-content');
          }
        }}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Show Modal</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#0569FF',
    borderColor: '#0569FF',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
});

export default App;
