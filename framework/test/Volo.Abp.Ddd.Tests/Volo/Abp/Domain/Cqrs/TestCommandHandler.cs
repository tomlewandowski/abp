using System.Threading.Tasks;
using Volo.Abp.Application.Cqrs;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.Domain.Cqrs
{
    public class TestCommandHandler : ICommandHandler<TestCommand>, ISingletonDependency
    {
        public string Name { get; private set; }

        public Task Handle(TestCommand command)
        {
            Name = command.Name;
            return Task.CompletedTask;
        }
    }
}