BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[departments] ADD CONSTRAINT [departments_isDisabled_df] DEFAULT 0 FOR [isDisabled];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
