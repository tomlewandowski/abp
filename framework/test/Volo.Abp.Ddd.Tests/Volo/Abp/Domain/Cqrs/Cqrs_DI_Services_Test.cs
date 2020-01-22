using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace Volo.Abp.Domain.Cqrs
{
    public class Cqrs_DI_Services_Test : CqrsTestBase
    {
        [Fact]
        public async Task Should_Automatically_Register_CommandHandlers_From_Services()
        {
            await CommandProcessor.Process(new TestCommand("Test"));

            GetRequiredService<TestCommandHandler>().Name.ShouldBe("Test");
        }
    }
}
