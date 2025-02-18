import { NodeAuthOptions, NodeSystemOptions, CacheOptions } from "@azure/msal-node";
export type AuthConfig = {
    auth: Omit<NodeAuthOptions, "azureCloudOptions" | "clientAssertion">;
    system?: NodeSystemOptions;
    cache?: CacheOptions;
};
export type WebAppAuthConfig = AuthConfig & {
    auth: NodeAuthOptions & AuthRoutes;
};
export type AuthRoutes = {
    redirectUri: string;
    frontChannelLogoutUri?: string;
    postLogoutRedirectUri?: string;
};
export type ProtectedResourcesMap = Record<string, ProtectedResourceParams>;
export type ProtectedResourceParams = {
    scopes: Array<string>;
    routes: Array<string>;
};
export declare enum AppType {
    WebApp = 0
}
//# sourceMappingURL=ConfigurationTypes.d.ts.map