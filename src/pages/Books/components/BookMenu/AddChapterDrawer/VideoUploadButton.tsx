import React from 'react';
import { Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { uploadVideo, validateVideoFile } from '../../../../../api/upload/videoService';

interface VideoUploadButtonProps {
  onSuccess: (url: string) => void;
}

const VideoUploadButton: React.FC<VideoUploadButtonProps> = ({ onSuccess }) => {
  const handleBeforeUpload = (file: File) => {
    const error = validateVideoFile(file);
    if (error) {
      message.error(error);
      return Upload.LIST_IGNORE;
    }
    return true;
  };

  const handleUpload = async (file: File) => {
    try {
      const url = await uploadVideo(file);
      onSuccess(url);
      message.success('Upload video thành công');
    } catch (error) {
      message.error('Không thể upload video');
      console.error('Upload error:', error);
    }
  };

  return (
    <Upload
      accept="video/mp4,video/webm,video/ogg"
      showUploadList={false}
      beforeUpload={handleBeforeUpload}
      customRequest={({ file }) => handleUpload(file as File)}
    >
      <Button size="small">
        <UploadOutlined /> Chọn file
      </Button>
    </Upload>
  );
};

export default VideoUploadButton;