import authorize from '../config/google-api-auth';
import { google } from 'googleapis';
import { Readable } from 'node:stream'

interface ReqBody {
    auth: any;
    part: string[];
    requestBody: {
        snippet: {
            title: string;
            description: string;
            tags: string[];
            defaultLanguage: string;
            defaultAudioLanguage: string;
        },
        status: {
            privacyStatus: string; // Set privacy status: private, public, unlisted,
            publishAt: string
        };
    };
    media: {
        body: any;
    };
}

//change into async await
export async function uploadVideoOnYoutubeService(reqObj: Record<string, any>, videoFile: Buffer) {
    try {
        let auth = await authorize();
  
        let req : ReqBody = {
            auth,
            part: reqObj.part,
            requestBody: {
                snippet: {
                    title: reqObj.title,
                    description: reqObj.description,
                    tags: JSON.parse(reqObj.tags),
                    defaultLanguage: reqObj.default_language ?? 'en',
                    defaultAudioLanguage: reqObj.default_language ?? 'en'
                },
                status: {
                    privacyStatus: reqObj.privacyStatus,
                    publishAt: reqObj.publishAt ? new Date(reqObj.publishAt).toISOString() : null
                }
            },
            media: {
                body: Readable.from(videoFile)
            }
        }

        const SERVICE = google.youtube('v3');
        const response = await SERVICE.videos.insert(req)

        if(response.status != 200) throw new Error('Something went wrong while uploading the video')

        return 'Video uploaded'
    }
    catch (error) {
        throw error
    }
}


