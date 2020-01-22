using Volo.Abp.Application.Cqrs;
using Volo.Abp.EventBus;

namespace Volo.Abp.Domain.Cqrs
{
    public abstract class CqrsTestBase : AbpIntegratedTest<DddTestModule>
    {
        protected ICommandProcessor CommandProcessor;
        protected IQueryProcessor QueryProcessor;

        protected CqrsTestBase()
        {
            CommandProcessor = GetRequiredService<ICommandProcessor>();
            QueryProcessor = GetRequiredService<IQueryProcessor>();
        }

        protected override void SetAbpApplicationCreationOptions(AbpApplicationCreationOptions options)
        {
            options.UseAutofac();
        }
    }
}