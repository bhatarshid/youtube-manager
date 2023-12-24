import { oauth2ClientGenerator } from "../config/google-api-auth";

const SCOPES = ['https://www.googleapis.com/auth/youtube.upload https://www.googleapis.com/auth/youtube.readonly'];

export async function generateAuthUrlService() {
    try {
        let oauth2Client = await oauth2ClientGenerator();
        var authUrl = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: SCOPES
        });

        return authUrl;
    }
    catch (error){
        throw error
    }
}

export async function getNewTokenService(code: any) {
    try {
        let oauth2Client = await oauth2ClientGenerator();

        const token = await oauth2Client.getToken(code);
        
        return {oauth2Client, token}
    }
    catch (error) {
        throw error
    }
}