BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[departments] (
    [id] INT NOT NULL IDENTITY(1,1),
    [displayName] NVARCHAR(50) NOT NULL,
    [description] NVARCHAR(200),
    [isDisabled] BIT NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [departments_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    CONSTRAINT [departments_pkey] PRIMARY KEY CLUSTERED ([id])
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
