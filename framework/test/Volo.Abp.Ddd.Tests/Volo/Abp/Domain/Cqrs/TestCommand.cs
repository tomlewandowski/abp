using Volo.Abp.Application.Cqrs;

namespace Volo.Abp.Domain.Cqrs
{
    public class TestCommand : CommandBase
    {
        public string Name { get; }

        public TestCommand(string name)
        {
            Name = name;
        }
    }
}