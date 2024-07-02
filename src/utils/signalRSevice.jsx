import * as signalR from "@microsoft/signalr";
const token = localStorage.getItem("token");
import { BaseUrl } from "./BaseUrl";

class SignalRService {
    constructor() {
        this.connection = new signalR.HubConnectionBuilder()
            .withUrl(`${BaseUrl}chathub`, {
                accessTokenFactory: () => token
            })
            .withAutomaticReconnect() // Tự động kết nối lại
            .configureLogging(signalR.LogLevel.Trace) // Ghi nhật ký chi tiết
            .build();

        this.connection.onclose(async (error) => {
            console.error('SignalR connection closed with error: ', error);
            await this.start();
        });

        this.start(); // Bắt đầu kết nối khi tạo đối tượng
    }

    async start() {
        try {
            await this.connection.start();
            console.log('SignalR connected');
        } catch (err) {
            console.error('SignalR connection error: ', err);
            setTimeout(() => this.start(), 5000); // Thử kết nối lại sau 5 giây nếu có lỗi
        }
    }

    on(event, callback) {
        this.connection.on(event, callback);
    }

    async send(event, ...args) {
        try {
            if (this.connection.state !== signalR.HubConnectionState.Connected) {
                throw new Error("SignalR connection is not established.");
            }
            await this.connection.send(event, ...args);
        } catch (err) {
            console.error('SignalR send error: ', err);
            throw err;
        }
    }
}

const signalRService = new SignalRService();
export default signalRService;
