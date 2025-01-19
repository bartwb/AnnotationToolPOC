import React from 'react';
import OHIFViewer from '@ohif/viewer';

const OHIFViewerComponent = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <OHIFViewer
        config={{
            
          servers: {
            dicomWeb: [
              {
                name: 'DICOM Server',
                wadoUriRoot: 'https://server-url/wado',
                qidoRoot: 'https://server-url/qido',
                stowRoot: 'https://server-url/stow',
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default OHIFViewerComponent;
