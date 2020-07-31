import {Alert} from 'react-native';

interface Action {
  text: string;
  onPress?: () => void;
}

function MessageAlert(title: string, message: string, actions?: Action[]) {
  const actionsReceived = actions ? [...actions] : [{text: 'OK'}];

  Alert.alert(title, message, [{text: 'Cancelar'}, ...actionsReceived], {
    cancelable: true,
  });
}

export default MessageAlert;
