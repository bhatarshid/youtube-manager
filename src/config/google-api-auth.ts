import fs from 'fs';
import { google } from 'googleapis';
import path from 'path';

const OAuth2 = google.auth.OAuth2;

const ROOT_DIR = path.join(__dirname, '..\\..');
const STORED_TOKEN_DIR = path.join(ROOT_DIR, '\\credentials\\stored_token.json');
const CLIENT_SECRET_DIR = path.join(ROOT_DIR, '\\credentials\\client_secret.json');

export default async function authorize() {
    try {
        let oauth2Client = await oauth2ClientGenerator();

        const token = fs.readFileSync(STORED_TOKEN_DIR);
        if(token.length == 0){
            throw new Error('Get new token');
        }
        const tokenExpDate = new Date(JSON.parse(token.toString()).expiry_date);

        if(new Date() > new Date(tokenExpDate)){
            throw new Error('Token expired. Please get a new token');
        }

        oauth2Client.credentials = JSON.parse(token.toString());

        return oauth2Client
    }
    catch (error){
        throw error
    }
}

export async function oauth2ClientGenerator() {
    try{
        const content = fs.readFileSync(CLIENT_SECRET_DIR);
        const credentials = JSON.parse(content.toString());
        const clientSecret = credentials.web.client_secret;
        const clientId = credentials.web.client_id;
        const redirectUri = credentials.web.redirect_uris[0];

        var oauth2Client = new OAuth2(clientId, clientSecret, redirectUri);

        return oauth2Client;
    }
    catch (error) {
        throw error
    }
}