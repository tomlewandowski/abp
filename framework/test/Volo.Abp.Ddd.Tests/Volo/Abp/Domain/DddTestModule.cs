using Volo.Abp.Application;
using Volo.Abp.Modularity;

namespace Volo.Abp.EventBus
{
    [DependsOn(typeof(AbpDddApplicationModule))]
    public class DddTestModule : AbpModule
    {
    }
}