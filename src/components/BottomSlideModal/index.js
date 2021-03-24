import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import Constants from '../../constants';
import {FaceCallListContainer, FilterComponent} from '../../components';
import styles from './style';

type props = {
  isVisibleModal: Boolean,
  onCloseFunction: Object,
  filterView: Boolean,
};

const filter_data = [
  {
    id: 1,
    title: '全部',
    isSelected: true,
  },
  {
    id: 2,
    title: '跟著玩系列 Play along',
    isSelected: false,
  },
  {
    id: 3,
    title: '歌唱教學系列 Sing along',
    isSelected: false,
  },
  {
    id: 4,
    title: '主課程 Main Program ',
    isSelected: false,
  },
];

const filter_data1 = [
  {
    id: 1,
    title: '全部',
    isSelected: true,
  },
  {
    id: 2,
    title: '未觀看',
    isSelected: false,
  },
  {
    id: 3,
    title: '已觀看',
    isSelected: false,
  },
];

const filter_data2 = [
  {
    id: 1,
    title: '我的最愛',
    isSelected: true,
  },
];

const faceCallDummyData = [
  {
    id: 1,
    title: 'Jack',
    icon: Constants.Images.Face_call_dummy_image,
    isSelected: false,
  },
  {
    id: 2,
    title: 'Jessica',
    icon: Constants.Images.Face_call_dummy_image,
    isSelected: false,
  },
  {
    id: 3,
    title: 'Kid 1',
    icon: Constants.Images.Face_call_dummy_image,
    isSelected: true,
  },
  {
    id: 4,
    title: 'Tom',
    icon: Constants.Images.Face_call_dummy_image,
    isSelected: false,
  },
  {
    id: 5,
    title: 'Kid 1',
    icon: Constants.Images.Face_call_dummy_image,
    isSelected: false,
  },
  {
    id: 6,
    title: 'Kid 1',
    icon: Constants.Images.Face_call_dummy_image,
    isSelected: false,
  },
  {
    id: 7,
    title: 'Kid 1',
    icon: Constants.Images.Face_call_dummy_image,
    isSelected: false,
  },
  {
    id: 8,
    title: 'Kid 1',
    icon: Constants.Images.Face_call_dummy_image,
    isSelected: false,
  },
];

const BottomSlideModal = ({
  isVisibleModal,
  onCloseFunction,
  filterView,
}: props) => {
  return (
    <Modal
      backdropColor={'#665B5150'} // This is used for customize the modal overlay color
      animationInTiming={0} // This is used for set in time modal animation
      animationOutTiming={0} // This is used for set out time modal animation
      isVisible={isVisibleModal}
      style={styles.container}
      onBackdropPress={onCloseFunction}>
      <View style={styles.modalContainer}>
        {filterView ? (
          <FilterComponent
            FilterData1={filter_data}
            FilterData2={filter_data1}
            FilterData3={filter_data2}
            onPressFirstButton={onCloseFunction}
            onPressSecondButton={onCloseFunction}
          />
        ) : (
          <FaceCallListContainer
            data={faceCallDummyData}
            onPressFirstButton={onCloseFunction}
            onPressSecondButton={onCloseFunction}
          />
        )}
      </View>
    </Modal>
  );
};

export default BottomSlideModal;
