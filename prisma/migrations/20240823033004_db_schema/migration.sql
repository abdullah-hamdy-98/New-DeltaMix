/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropTable
DROP TABLE [dbo].[Post];

-- CreateTable
CREATE TABLE [dbo].[News] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Title] VARCHAR(255) NOT NULL,
    [Dscr] VARCHAR(max) NOT NULL,
    [Img] VARCHAR(255) NOT NULL,
    [EntryDate] DATETIME2 NOT NULL CONSTRAINT [News_EntryDate_df] DEFAULT CURRENT_TIMESTAMP,
    [AuthorId] INT NOT NULL,
    CONSTRAINT [News_pkey] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Stations] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Station_Title] VARCHAR(255) NOT NULL,
    [Station_Dscr] VARCHAR(max) NOT NULL,
    [Station_Img] VARCHAR(255) NOT NULL,
    [Station_Locat] VARCHAR(255) NOT NULL,
    [Station_Type] VARCHAR(255) NOT NULL,
    [Station_Country] VARCHAR(255) NOT NULL,
    [Station_Model] VARCHAR(255) NOT NULL,
    [Station_Capacity] VARCHAR(255) NOT NULL,
    [Station_Silohat] VARCHAR(255) NOT NULL,
    [Station_Geo] VARCHAR(255) NOT NULL,
    [EntryDate] DATETIME2 NOT NULL CONSTRAINT [Stations_EntryDate_df] DEFAULT CURRENT_TIMESTAMP,
    [AuthorId] INT NOT NULL,
    CONSTRAINT [Stations_pkey] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Projects] (
    [Id] INT NOT NULL IDENTITY(1,1),
    [Project_Title] VARCHAR(255) NOT NULL,
    [Project_Img] VARCHAR(255) NOT NULL,
    [EntryDate] DATETIME2 NOT NULL CONSTRAINT [Projects_EntryDate_df] DEFAULT CURRENT_TIMESTAMP,
    [AuthorId] INT NOT NULL,
    CONSTRAINT [Projects_pkey] PRIMARY KEY CLUSTERED ([Id])
);

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [UserId] INT NOT NULL IDENTITY(1,1),
    [UserName] VARCHAR(255) NOT NULL,
    [Img] VARCHAR(255) NOT NULL,
    [IsAdmin] BIT NOT NULL CONSTRAINT [Users_IsAdmin_df] DEFAULT 0,
    [EntryDate] DATETIME2 NOT NULL CONSTRAINT [Users_EntryDate_df] DEFAULT CURRENT_TIMESTAMP,
    [AuthorId] INT NOT NULL,
    CONSTRAINT [Users_pkey] PRIMARY KEY CLUSTERED ([UserId])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
