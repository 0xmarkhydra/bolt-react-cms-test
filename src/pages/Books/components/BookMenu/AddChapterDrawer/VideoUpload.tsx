import React, { useState } from 'react';
import { Form, Button, List, Space } from 'antd';
import { UploadOutlined, CodeOutlined, DeleteOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/es/upload/interface';
import VideoEmbedModal from './VideoEmbedModal';

interface VideoItem {
  id: string;
  type: 'embed' | 'upload';
  content: string;
  title?: string;
}

interface VideoUploadProps {
  value?: VideoItem[];
  onChange?: (videos: VideoItem[]) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ value = [], onChange }) => {
  const [isEmbedModalOpen, setIsEmbedModalOpen] = useState(false);

  const handleUploadVideo = () => {
    // Handle video upload logic
    console.log('Upload video clicked');
  };

  const handleEmbedVideo = (embedCode: string) => {
    const newVideo: VideoItem = {
      id: Date.now().toString(),
      type: 'embed',
      content: embedCode,
      title: 'YouTube Video'
    };
    
    onChange?.([...value, newVideo]);
  };

  const handleDeleteVideo = (videoId: string) => {
    onChange?.(value.filter(v => v.id !== videoId));
  };

  return (
    <Form.Item label="Video">
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button 
            icon={<UploadOutlined />} 
            onClick={handleUploadVideo}
          >
            Upload video
          </Button>
          <Button 
            icon={<CodeOutlined />}
            onClick={() => setIsEmbedModalOpen(true)}
          >
            Nhúng video
          </Button>
        </div>

        {value.length > 0 && (
          <div className="space-y-4 border rounded-lg p-4">
            {value.map((video) => (
              <div 
                key={video.id} 
                className="relative border rounded-lg p-4 bg-gray-50"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium">{video.title}</h4>
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleDeleteVideo(video.id)}
                  />
                </div>

                {video.type === 'embed' && (
                  <div 
                    className="video-container"
                    dangerouslySetInnerHTML={{ __html: video.content }}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        <VideoEmbedModal
          open={isEmbedModalOpen}
          onClose={() => setIsEmbedModalOpen(false)}
          onSubmit={handleEmbedVideo}
        />
      </div>

      <style jsx>{`
        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          border-radius: 8px;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }
      `}</style>
    </Form.Item>
  );
};

export default VideoUpload;