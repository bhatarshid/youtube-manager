import authorize from '../config/google-api-auth';
import { google } from 'googleapis';


//change into async await
export async function uploadVideoOnYoutubeService(reqObj: Record<string, any>, videoFile: Buffer) {
    try {
        let auth = await authorize();
        reqObj.auth= auth
        
        const SERVICE = google.youtube('v3');
        const response = await SERVICE.videos.insert(reqObj)

        if(response.status != 200) throw new Error('Something went wrong while uploading the video')

        return 'Video uploaded'
    }
    catch (error) {
        throw error
    }
}


