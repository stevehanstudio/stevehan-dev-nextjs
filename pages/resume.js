import React from 'react'
import { Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { Worker } from '@react-pdf-viewer/core'
import Layout from '../components/Layout'
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Resume = () => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	const viewPdf = '/SteveHanDevResume.pdf'
  return (
		<Layout>
			{viewPdf && (
				<>
					<Worker workerUrl='https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js'>
						<Viewer
							fileUrl={viewPdf}
							plugins={[defaultLayoutPluginInstance]}
						/>
					</Worker>
				</>
			)}
		</Layout>
  );
}

export default Resume
