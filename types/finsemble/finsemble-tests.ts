(async () => {
    // Working with Workspaces
    const { data: aws } = await FSBL.Clients.WorkspaceClient.getActiveWorkspace();
    console.log(aws.windows)

    // Launching a window
    FSBL.Clients.LauncherClient
})();


